(function($) {

    var JncoCam = {
        init: function() {
            this.jncoGrid.init();
        },

        jncoGrid: {

            instagramAccessToken: '192731193.22c81c6.3d3f9b8ca1d24c2a8304767af4fbe6b3', // For 'alexshred420' user

            init: function() {

                var $instagram = $('#instagram'),
                    endpoint = 'https://api.instagram.com/v1/tags/jncocam/media/recent?access_token=' + this.instagramAccessToken + '';

                $.ajax({
                    crossDomain: true,
                    dataType: 'jsonp',
                    url: endpoint
                })
                .done(function(data, status, jqXHR) {

                    if (status == 'success') {
                        $.each(data.data, function(index, image) {
                            var url = image.link,
                                imageUrl = image.images.standard_resolution.url,
                                caption = '';

                            // Create an <a> image wrapper

                            $imageWrapper = $('<a>')
                                .attr({
                                    'class': 'image',
                                    'href': url,
                                    'target': '_blank'
                                })
                                .append(
                                    $('<img>').attr('src', imageUrl)
                                );

                            // Append the caption, if present

                            if (image.caption && image.caption.from.username) {
                                $imageWrapper.append(
                                    $('<small>')
                                        .attr('class', 'caption')
                                        .text(image.caption.from.username)
                                );
                            }

                            // Write it to the page

                            $instagram.append(
                                $imageWrapper
                            );
                        });
                    }
                });

            }
        }
    };

    $(document).ready(function() {
        JncoCam.init();
    });

})(jQuery);