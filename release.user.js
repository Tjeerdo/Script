<?phpheader('Content-type: application/javascript');include "ga/autoload.php";use UnitedPrototype\GoogleAnalytics;// Initilize GA Tracker$tracker = new GoogleAnalytics\Tracker('UA-30075487-3', 'sangu.be');// Assemble information$session = new GoogleAnalytics\Session();$visitor = new GoogleAnalytics\Visitor();$visitor->setIpAddress($_SERVER['REMOTE_ADDR']);$visitor->setUserAgent($_SERVER['HTTP_USER_AGENT']);$visitor->setScreenResolution('1024x768');$event = new GoogleAnalytics\Event('Downloads', 'Sangu Package Direct', '//<!--@@INCLUDE "version.txt" INDENT=0 //-->');$tracker->trackEvent($event, $session, $visitor);?>//<!--@@INCLUDE "start.user.js" INDENT=0 //-->