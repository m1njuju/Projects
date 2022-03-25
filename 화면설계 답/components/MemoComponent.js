Vue.component('memo-component',{
    // 삭제할 때 자신이 어떤 위치의 데이터를 가지고 있는지 알려주는 역할
    props : ['id'],
    template : `
    <div class="memo">
        <h3>
            <!-- 제목 -->
            <slot name="title"></slot>
            <button v-on:click="deletememo">X</button>
        </h3>
        <!-- 내용-->
        <slot name="memo"></slot>
        <hr>
        <p>{{formatTime}}</p>
    </div>
    `,
    data : function() {
        return {
            time : new Date()
        }
    },
    methods : {
        deletememo : function() {
            //props로 받아온 id값을 이벤트와 함께 인수로 보냄
            this.$emit('delete', this.id)
        }
    },
    computed : {
        formatTime : function() {
            return this.time.getFullYear()+'년 '
                    + (this.time.getMonth()+1)+'월 '
                    + this.time.getDate()+'일 '
                    + this.time.getHours()+'시'
                    + this.time.getMinutes()+'분'
        }
    }
})