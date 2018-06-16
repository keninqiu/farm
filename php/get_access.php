<?php 
require_once './Setting.php';
require_once './aliyun-php-sdk/aliyun-php-sdk-core/Config.php';   // 假定您的源码文件和aliyun-php-sdk处于同一目录
use vod\Request\V20170321 as vod;

function init_vod_client($accessKeyId, $accessKeySecret) {
  $regionId = 'cn-shanghai';  // 点播服务所在的Region，国内请填cn-shanghai，不要填写别的区域
  $profile = DefaultProfile::getProfile($regionId, $accessKeyId, $accessKeySecret);
  return new DefaultAcsClient($profile);
}
/*
function get_play_info($client, $videoId) {
  $request = new vod\GetPlayInfoRequest();
  $request->setVideoId($videoId);
  $request->setAcceptFormat('JSON');
  return $client->getAcsResponse($request);
}
*/
function get_play_auth($client, $videoId) {
    $request = new vod\GetVideoPlayAuthRequest();
    $request->setVideoId($videoId);
    $request->setAuthInfoTimeout(3600);  // 播放凭证过期时间，默认为100秒，取值范围100~3600；注意：播放凭证用来传给播放器自动换取播放地址，凭证过期时间不是播放地址的过期时间
    $request->setAcceptFormat('JSON');
    $response = $client->getAcsResponse($request);
    return $response;
}

try {
	$type = $_GET["type"];

	$videoId = 'eaf47c0dd72f4fba97368ed1cd9559a7'; //
	
  if($type == 'fog' || $type == 'Fog') {
    $videoId = '7a3c93b576324e38b7e19ec1649a932f';
  }
  else if($type == 'pumpkin' || $type == 'Pumpkin') {
    $videoId = 'dd0184b806fa41a4b385a96487b50bb8';
  }
  else if($type == 'tomato' || $type == 'Tomato') {
    $videoId = '27fbb1808910456598b6be5ffe3e9904';
  }  
    $client = init_vod_client(Setting::AccessKeyId, Setting::AccessKeySecret);
    $playInfo = get_play_auth($client, $videoId);
    echo json_encode($playInfo);
} catch (Exception $e) {
   print $e->getMessage();
}