function closeMovie() {
  player.dispose(); //销毁
  $('#J_prismPlayer').empty();//id为html里指定的播放器的容器id
}