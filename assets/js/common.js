// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
$(function () {
    lazyLoadOptions = {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        },
        afterLoad: function(element) {
            if (element.is('img')) {
                // remove background-image style
                element.css('background-image', 'none');
            } else if (element.is('div')) {
                // set the style to background-size: cover; 
                element.css('background-size', 'cover');
                element.css('background-position', 'center');
            }
        }
    }

    $('img.lazy, div.lazy:not(.always-load)').Lazy({visibleOnly: true, ...lazyLoadOptions});
    $('div.lazy.always-load').Lazy({visibleOnly: false, ...lazyLoadOptions});

    $('[data-toggle="tooltip"]').tooltip()

    var $grid = $('.grid').masonry({
        "percentPosition": true,
        "itemSelector": ".grid-item",
        "columnWidth": ".grid-sizer"
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    $(".lazy").on("load", function () {
        $grid.masonry('layout');
    });
});

// Collapsible abstracts: hidden by default, revealed by a toggle.
// publication_item.html renders every publication twice (a desktop block and a
// mobile one), so ids are generated here at runtime rather than written into
// the template, where the two copies would collide.
// The leading semicolon guards against the preceding statement running into
// this one: ASI does not break before '(', so without it the two would parse
// as a single call expression.
;(function () {
    var seq = 0;

    function setup(el) {
        // Nothing to reveal for a publication with no abstract.
        if (!el.textContent.trim()) return;

        el.classList.add('is-collapsed');
        el.id = el.id || 'abstract-' + (++seq);

        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'abstract-toggle small';
        btn.textContent = 'Show abstract';
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-controls', el.id);
        btn.addEventListener('click', function () {
            var expanded = !el.classList.toggle('is-collapsed');
            btn.textContent = expanded ? 'Hide abstract' : 'Show abstract';
            btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        });

        el.insertAdjacentElement('afterend', btn);
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.abstract-text').forEach(setup);
    });
})();
