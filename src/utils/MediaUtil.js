/**
* name
*/
var SoundManager = Laya.SoundManager;
var utils;
(function (utils) {
    var MediaUtil = /** @class */ (function () {
        function MediaUtil() {
        }
        MediaUtil.playVideo = function (type) {
            if ((type == 'Dog') && (MediaUtil.readyToPlayVideo)) {
                $('#videoId').attr('src', 'res/mp4/dog.mp4');
                $('#myModal').modal('toggle');
                MediaUtil.readyToPlayVideo = false;
                MediaUtil.type = type;
            }
            else if ((type == 'Tomato') && (MediaUtil.readyToPlayVideo)) {
                $('#videoId').attr('src', 'res/mp4/tomato.mp4');
                $('#myModal').modal('toggle');
                MediaUtil.readyToPlayVideo = false;
                MediaUtil.type = type;
            }
            else if ((type == 'Fog') && (MediaUtil.readyToPlayVideo)) {
                $('#videoId').attr('src', 'res/mp4/fog.mp4');
                $('#myModal').modal('toggle');
                MediaUtil.readyToPlayVideo = false;
                MediaUtil.type = type;
            }
            else if ((type == 'Pumpkin') && (MediaUtil.readyToPlayVideo)) {
                $('#videoId').attr('src', 'res/mp4/pumpkin.mp4');
                $('#myModal').modal('toggle');
                MediaUtil.readyToPlayVideo = false;
                MediaUtil.type = type;
            }
        };
        MediaUtil.playAudio = function (type) {
            if ((type == 'Dog') && (MediaUtil.readyToPlayAudio)) {
                SoundManager.playMusic("res/audio/dog.mp3", 1, null);
                MediaUtil.readyToPlayAudio = false;
            }
            else if ((type == 'Fog') && (MediaUtil.readyToPlayAudio)) {
                SoundManager.playMusic("res/audio/fog.wav", 1, null);
                MediaUtil.readyToPlayAudio = false;
            }
        };
        MediaUtil.readyToPlayVideo = false;
        MediaUtil.readyToPlayAudio = false;
        MediaUtil.type = '';
        return MediaUtil;
    }());
    utils.MediaUtil = MediaUtil;
})(utils || (utils = {}));
//# sourceMappingURL=MediaUtil.js.map