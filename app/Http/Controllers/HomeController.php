<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Process;
use Illuminate\Support\Facades\Storage;


class HomeController extends Controller
{
    public function isStatic()
    {
        return Str::contains(request()->path(), '__static__');
    }

    public function index()
    {
        return Inertia::render('Home', [
            'static' => $this->isStatic(),
            'posts' => $this->getPosts()
        ]);
    }

    public function show(string $slug)
    {
        $slug = Str::contains($slug, '__static__') ? Str::before($slug, '__static__') : $slug;

        $posts = $this->getPosts();
        $postIndex = $posts->where('slug', $slug)->keys()->first();

        $prevPost = $posts->get($postIndex + 1) ?? null;
        $nextPost = $posts->get($postIndex - 1) ?? null;

        $markdownFile = sprintf('markdown/%s.md', $slug);

        if(!Storage::disk('resources')->exists($markdownFile)) {
            return to_route('not-found');
        }

        $markdown = Storage::disk('resources')->get($markdownFile);
        $content = $this->convertMarkdown($markdown);

        return Inertia::render('Article', [
            'static' => $this->isStatic(),
            'content' => $content,
            'nextPost' => $nextPost,
            'prevPost' => $prevPost, 
        ]);
    }

    protected function getPosts()
    {
        $fileContent = Storage::disk('resources')->get('json/posts.json');
        return collect(json_decode($fileContent));
    }

    protected function convertMarkdown(string $markdown)
    {
        $result = Process::run([config('app.nodePath'), base_path('markdownConverter.js'), $markdown]);
        $output = $result->output();

        if ($result->successful()) {
            return json_decode($output);
        } else {
            throw new \Exception($result->errorOutput());
        }

        dd(json_decode($output));
    }
}
