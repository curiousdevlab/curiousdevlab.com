<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Support\Arr;
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

        $nextPost = $posts->get($postIndex + 1) ?? null;
        $prevPost = $posts->get($postIndex - 1) ?? null;

        if(Storage::disk('resources')->exists($slug.'.md')) {
            $markdown = Storage::disk('resources')->get($slug.'.md');
            
            $content = $this->convertMarkdown($markdown);

            return Inertia::render('Post', [
                'static' => $this->isStatic(),
                'content' => $content,
                'nextPost' => $nextPost,
                'prevPost' => $prevPost, 
            ]);
        }

        return Inertia::render('NotFound');
    }

    protected function getPosts()
    {
        $fileContent = Storage::disk('resources')->get('posts.json');
        return collect(json_decode($fileContent));
    }

    protected function convertMarkdown(string $markdown)
    {
        $result = Process::run([env('NODE_PATH'), base_path('markdownconverter.js'), $markdown]);
        $output = $result->output();

        if ($result->successful()) {
            //dd(json_decode($output));
            return json_decode($output);
        } else {
            throw new \Exception($result->errorOutput());
        }

        dd(json_decode($output));
    }
}
