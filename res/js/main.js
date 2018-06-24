function closeMovie() {
  player.dispose(); //销毁
  $('#J_prismPlayer').empty();//id为html里指定的播放器的容器id
}

var app = new Vue({
        el: '#app',
        data: {
            visible: false
        },
        methods: {
            show: function () {
                this.visible = true;
            }
        }
    })