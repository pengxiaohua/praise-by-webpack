

xtag.register('x-praise', {
    content: '<div class="hand" id="thumb">'+
        '<div class="finger thumb"></div>'+
        '<div class="finger"></div>'+
        '<div class="finger"></div>'+
        '<div class="finger"></div>'+
        '<div class="finger"></div>'+
        '<div class="arm"></div>'+
        '<div class="count-div">'+
            '当前已点赞：<span id="count"></span>次'+
        '</div>'+
        '<span class="hide" id="animation">+1</span>'+
        '</div>',
    lifecycle: {
        created: function(){

        }
    },
    methods: {
        shout: function(message){
            setTimeout(function(){
                
            },this.delay);
        }
    },
    events: {
        tap: function(){
            this.shout(this.firstElementChild.value);
        }
    }
});