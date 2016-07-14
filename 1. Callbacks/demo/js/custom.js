$(document).ready(function() {

    var $ip = $('#ip-response');
    var $dnt = $('#dnt-response');
    var $md5 = $('#md5-response');
    $.ajax({
        type: 'GET',
        url: 'http://ip.jsontest.com/', //view docs at http://www.jsontest.com/#ip
        success: function(ip) {
            //things to do after reciving ip
            $ip.append('<p>Got ip:</p>');
			$ip.append('<pre><code>' + JSON.stringify(ip,undefined,2) + '</code></pre>');

            //next Call
            $.ajax({
                type: 'GET',
                url: 'http://date.jsontest.com/', //view docs at http://www.jsontest.com/#date
                success: function(dnt) {
                    //things to do after reciving date and time
                    $dnt.append('<p>Got date and time:</p>');
                    $dnt.append('<pre><code>' + JSON.stringify(dnt,undefined,2) + '</code></pre>');

                    //next Call
                    $.ajax({
                        type: 'GET',
                        url: 'http://md5.jsontest.com/?text=text', //view docs at http://www.jsontest.com/#md5
                        success: function(md5) {
							//things to do after reciving md5 string
                            $md5.append('<p>Got md5:</p>');
							$md5.append('<pre><code>' + JSON.stringify(md5,undefined,2) + '</code></pre>');
                        },
                        error: function(error) {
                            $md5.append('<p>Error:' + error.toString() + '</p>');
                        }
                    });

                },
                error: function(error) {
                    $dnt.append('<p>Error:' + error.toString() + '</p>');
                }
            });

        },
        error: function(error) {
            $ip.append('<p>Error:' + error.toString() + '</p>');
        }
    });
});
