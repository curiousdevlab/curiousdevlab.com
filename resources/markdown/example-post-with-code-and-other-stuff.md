---
title: Example Post with Code and Other Stuff
description: This is an example post with code and other stuff
slug: example-post-with-code-and-other-stuff
date: 2023-08-13 10:00:00
tags: [Laravel, Example]
---

## Table of contents

## Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non leo non leo dignissim ornare. Nulla quis ex et magna porta malesuada ut in turpis. Aliquam accumsan sit amet purus vel porta.

Quisque tellus magna, euismod in feugiat id, varius facilisis diam. Cras nec erat nec ante ultrices lacinia. Maecenas a elementum neque, sed fermentum enim.

<div class="code-title">Terminal</div>

```bash
composer create-project laravel/laravel my-project
```

Nam elementum, elit et blandit sollicitudin, elit mi condimentum nisl, quis facilisis nunc sapien sit amet magna. Vivamus eu lorem neque. Vivamus tincidunt massa sed sapien blandit, non ultrices est porta. 

Sed a dignissim ante, at sollicitudin magna. Nulla eget orci vitae augue fermentum ultricies. Praesent gravida massa neque, quis condimentum est sagittis a. Duis tincidunt scelerisque orci, sed porta sem iaculis id. Donec pulvinar eu ipsum sit amet auctor.

<div class="react-note-block" data-title="Point">
  This is an important block. Pay attention
</div>

## How to use

Sed suscipit, dolor id vestibulum dapibus, sapien mi eleifend purus, id ultrices lorem odio in justo. Quisque ut mauris at lacus ullamcorper porttitor sed quis dolor. Sed cursus vestibulum faucibus. 

Maecenas eget nunc et neque luctus laoreet. In id ultrices lorem. Donec ac risus non nulla faucibus semper. Sed sed lorem nunc.


<div class="code-title">Example.js</div>

```php
class Person {
  public $name;
  protected $address; //[tl! add]

  public function __construct() { // [tl! highlight]
    $this->name = 'John Doe';
  }

  public function getAddress() {
    return 'No address'; // [tl! remove]
    return $this->address ?? 'No address';
  }

  public function setAddress($address) { // [tl! add:2]
    $this->address = $address;
  }
}
```

## More Content Example

Praesent bibendum ipsum non ante auctor imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ut sollicitudin augue. Suspendisse dapibus auctor aliquam. Cras venenatis est et mi posuere varius. Maecenas laoreet bibendum risus, ut dictum arcu auctor ut. 

Nunc tortor lacus, ultrices ut lobortis nec, elementum a ante. Vestibulum in enim laoreet, egestas nibh quis, accumsan tellus. Suspendisse at urna mollis, consequat augue eget, placerat elit. Morbi blandit sapien eget eros faucibus ullam

### Level 2 Content

Ut nisi ligula, condimentum sed ipsum nec, imperdiet condimentum dui. Duis dapibus nulla eget lorem ornare, in accumsan urna vestibulum. 

Etiam eu rhoncus urna, nec rhoncus risus.
Nam eu nibh ac sem rutrum vulputate. Maecenas in felis odio. Donec id vestibulum felis. 

### Another Level 2 Content

Praesent pharetra mi ut odio ultrices, ut aliquam odio ornare. Etiam eleifend tellus eget ante ultricies, ut cursus magna consequat. Nunc ut ex vitae justo venenatis mattis. 


## Conclusion

This is the end of the post. Hope you enjoyed it.