function include(script_filename) {
    document.write('<' + 'script');
    document.write(' language="javascript"');
    document.write(' type="text/javascript"');
    document.write(' src="' + script_filename + '">');
    document.write('</' + 'script' + '>');
}

include('../js/jquery-1.9.1.min.js');
include('../js/icheck.min.js');
include('../js/Left-menu.js');
include('../js/jquery.tooltipster.min.js');
include('../js/candela.js');
//include('js/jquery.cookie.js');