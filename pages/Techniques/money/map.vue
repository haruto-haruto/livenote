<template>
    <insert1>
        <template #title>マネーマップ</template>
        <template #explanation>あああっははっははっは</template>
    </insert1>
    <div class="m-5 p-5 text-center ou-morphism">
        <div class="flex flex-col">
            <div class="mb-3">Steps</div>
            <div class="grid grid-cols-2">
                <div class="flex flex-col space-y-1 m-3 text-xl">
                    <p @click="changeExplanation(0)">1.子供時代</p>
                    <p @click="changeExplanation(1)">2.自分を四角で</p>
                    <p @click="changeExplanation(2)">3.重要な男性を△で</p>
                    <p @click="changeExplanation(3)">4.重要な女性を○で</p>
                    <p @click="changeExplanation(4)">5.人間以外を長方形で</p>
                    <p @click="changeExplanation(5)">6.影響、裕福、秘密の可視化</p>
                    <p @click="changeExplanation(6)">7.お金の流れ</p>
                </div>
                <div>
                    <div class="mb-8">
                        <transition>
                            <div class="text-left text-2xl">{{  explanation[explanationCount]  }}</div>
                        </transition>
                    </div>
                </div>
            </div>
            <div name="button" class="flex justify-around">
                <button class="w-auto h-auto p-3 text-xl rouded-xl shadow-md" @click="preExplanation()">前に</button>
                <button class="w-auto h-auto p-3 text-xl rouded-xl shadow-md" @click="nextExplanation()">次へ</button>
            </div> 
        </div>
        <hr class="border m-5">
        <div class="flex flex-col">
            <div class="mb-3">
                <p>年齢</p>
                <input>
            </div>
            <div class="flex">
                <div class="w-[95%] min-h-[60rem] ml-5 bg-white">
                    <div v-for="elem in images" v-memo="[]" class="absolute draggable">
                        <img :src="elem" class="w-full h-full min-w-[40px] min-h-[40px]" >
                        <span class="absolute top-[50%] left-[50%] p-0 m-0 translate-x-[-50%] translate-y-[-50%]" contenteditable="true">test</span>
                    </div>
                    <img v-for="elem in dollars" v-memo="[]" class="absolute draggable min-w-[40px] min-h-[40px]" :src="elem" width="50" height="50">
                    <img v-for="elem in arrows" v-memo="[]" class="absolute draggable" :src="arrow" :style="{transform: 'rotate('+elem+'deg)'}" @mouseover="rotate(elem)" @mouseup="upRotate" @mouseleave="leaveRotate">
                </div>
                <div class="flex flex-col ml-2 px-2 py-5 ou-morphism">
                    <div>
                    <img src="~/assets/images/square.svg" width="50" height="50" alt="" @click.="adddrag(1)">
                    <img src="~/assets/images/triangle.svg" width="50" height="50" alt="" @click="adddrag(2)">
                    <img src="~/assets/images/circle.svg" width="50" height="50" alt="" @click="adddrag(3)">
                    <img src="~/assets/images/rectangle.svg" width="50" height="50" alt="" @click="adddrag(4)">
                    <img src="~/assets/images/dollarP.svg" width="50" height="50" alt="" @click="adddragD(5)">
                    <img src="~/assets/images/dollarM.svg" width="50" height="50" alt="" @click="adddragD(6)">
                    <img src="~/assets/images/arrow.svg" width="50" height="50" alt="" @click="adddragA(14)">
                    <img src="~/assets/images/arrow.svg" width="50" height="50" alt="" :style="{ transform: 'rotate(45deg)' }" @click="adddragA(7)">
                    <img src="~/assets/images/arrow.svg" width="50" height="50" alt="" :style="{ transform: 'rotate(90deg)' }" @click="adddragA(8)">
                    <img src="~/assets/images/arrow.svg" width="50" height="50" alt="" :style="{ transform: 'rotate(135deg)' }" @click="adddragA(9)">
                    <img src="~/assets/images/arrow.svg" width="50" height="50" alt="" :style="{ transform: 'rotate(180deg)' }" @click="adddragA(10)">
                    <img src="~/assets/images/arrow.svg" width="50" height="50" alt="" :style="{ transform: 'rotate(225deg)' }" @click="adddragA(11)">
                    <img src="~/assets/images/arrow.svg" width="50" height="50" alt="" :style="{ transform: 'rotate(270deg)' }" @click="adddragA(12)">
                    <img src="~/assets/images/arrow.svg" width="50" height="50" alt="" :style="{ transform: 'rotate(315deg)' }" @click="adddragA(13)">
                </div>
                </div>

            </div>
        </div>
        <hr class="border m-5">
        <div class="flex flex-col">
            <div>読解</div>
            <div class="flex justify-center space-x-2">
                <div class="w-[30%]"> 
                    <p>8.生まれたマネスク</p>
                    <textarea class="w-full min-h-[20rem]"></textarea>
                </div>
                <div class="w-[30%]"> 
                    <p>9.マネスクの不健全さチェック</p>
                    <textarea class="w-full min-h-[20rem]"></textarea>
                </div>
                <div class="w-[30%]"> 
                    <p>10.マネスクから受けた自分の行動</p>
                    <textarea class="w-full min-h-[20rem]"></textarea>
                </div>
            </div>
        </div>
        <hr class="border m-5">
        <div class="flex flex-col">
            <div>11.マネスクからの自分の感情体験</div>
            <div class="flex space-x-2">
                <div name="posi&nega" class="w-[55%]"> 
                    <div class="flex space-x-2">
                        <div name="posi" class="w-[49%]">
                            <p>ポジティブ</p>
                            <textarea class="w-full min-h-[20rem]"></textarea>
                        </div>
                        <div name="nega" class="w-[49%]">
                            <p>ネガティブ</p>
                            <textarea class="w-full min-h-[20rem]"></textarea>
                        </div>
                    </div>
                </div>
                <div class="flex items-center">⇒</div>
                <div class="w-[45%]">
                    <p>具体的な損失</p>
                    <textarea class="w-full min-h-[20rem]"></textarea>
                </div>          
            </div>
        </div>
        <hr class="border m-5">
        <div>
            <p>12.マネスクが原因の辛い経験</p>
            <textarea class="w-[50%]  min-h-[20rem]"></textarea>
        </div>
        <div>
            <p>総論</p>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import interact from 'interactjs'
import square from '~/assets/images/square.svg';
import triangle from '~/assets/images/triangle.svg';
import circle from '~/assets/images/circle.svg';
import rectangle from '~/assets/images/rectangle.svg';
import dollarP from '~/assets/images/dollarP.svg';
import dollarM from '~/assets/images/dollarM.svg';
import arrow from '~/assets/images/arrow.png';
export default defineComponent({
    name:'money_map',
    components:{},
    setup(){
        onMounted(() => {
            interact('.draggable')
            .resizable({
                // resize from all edges and corners
                edges: { left: true, right: true, bottom: true, top: true },
                listeners: {
                    move (event) {
                        var target = event.target
                        var x = (parseFloat(target.getAttribute('data-x')) || 0)
                        var y = (parseFloat(target.getAttribute('data-y')) || 0)
                        // update the element's style
                        target.style.width = event.rect.width + 'px'
                        target.style.height = event.rect.height + 'px'
                        // translate when resizing from top or left edges
                        x += event.deltaRect.left
                        y += event.deltaRect.top
                        target.style.transform = 'translate(' + x + 'px,' + y + 'px)' + ' '  + 'rotate(' + angle.value + 'deg)'

                        target.setAttribute('data-x', x)
                        target.setAttribute('data-y', y)
                    }
                },
                modifiers: [
                    // keep the edges inside the parent
                    interact.modifiers.restrictEdges({
                        outer: 'parent'
                    }),
                    // minimum size
                    interact.modifiers.restrictSize({
                        min: { width: 50, height: 50 }
                    })
                ],
                inertia: true
            })
            .draggable({
                // enable inertial throwing
                inertia: true,
                // keep the element within the area of it's parent
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: 'parent',
                        endOnly: true
                    })
                ],
                // enable autoScroll
                autoScroll: true,
                listeners: {
                    // call this function on every dragmove event
                    move: dragMoveListener,
                    // call this function on every dragend event
                    end (event) {
                        var textEl = event.target.querySelector('p')
                        textEl && (textEl.textContent =
                        'moved a distance of ' +
                        (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                        Math.pow(event.pageY - event.y0, 2) | 0))
                        .toFixed(2) + 'px')
                    }
                }
            })
            function dragMoveListener (event) {
                var target = event.target
                // keep the dragged position in the data-x/data-y attributes
                var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
                var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
                // translate the element
                target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
                // update the posiion attributes
                target.setAttribute('data-x', x)
                target.setAttribute('data-y', y)
            }
            // this function is used later in the resizing and gesture demos
            window.dragMoveListener = dragMoveListener
        });
        const adddrag = (id) => {
            console.log("add");
            var add = ""
            switch(id) {
                case 1:
                    add = square;
                    break;
                case 2:
                    add = triangle;
                    break;
                case 3:
                    add = circle;
                    break;
                case 4:
                    add = rectangle;
                    break;
            }
            images.value.push(add);
        };
        const adddragD = (id) => {
            console.log("add");
            var add = ""
            switch(id) {
                case 5:
                    add = dollarP;
                    break;
                case 6:
                    add = dollarM;
                    break;
                }
            dollars.value.push(add);
        };
        const adddragA = (id) => {
            console.log("add");
            var addarrow = ""
            switch(id) {
                case 7:
                    addarrow = 45;
                    break;
                case 8:
                    addarrow = 90;
                    break;
                case 9:
                    addarrow = 135;
                    break;

                case 10:
                    addarrow = 180;
                    break;
                case 11:
                    addarrow = 225;
                    break;
                case 12:
                    addarrow = 270;
                    break;
                case 13:
                    addarrow = 315;
                    break;
                case 14:
                    addarrow = 0;
                    break;
            }
            arrows.value.push(addarrow);
        }
        
        const rotate = (rotate)  =>{
            angle.value = rotate;
        };
        const leaveRotate = (e) => {
            var target = e.target
            var x = (parseFloat(target.getAttribute('data-x')) || 0)
            var y = (parseFloat(target.getAttribute('data-y')) || 0)
            target.style.transform = 'translate(' + x + 'px,' + y + 'px)' + ' '  + 'rotate(' + angle.value + 'deg)'
            angle.value = "";
        };
        const upRotate = (e) => {
            var target = e.target
            var x = (parseFloat(target.getAttribute('data-x')) || 0)
            var y = (parseFloat(target.getAttribute('data-y')) || 0)
            target.style.transform = 'translate(' + x + 'px,' + y + 'px)' + ' '  + 'rotate(' + angle.value + 'deg)'
            angle.value = angle.value;
        };
        const screenX = ref(0);
        const screenY = ref(0);
        const images = ref([]);
        const dollars = ref([]);
        const arrows = ref([]);
        const angle = ref();

        const explanationCount = ref(0)
        const explanation = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
        ];
        const changeExplanation = (id) => {
            explanationCount.value = id
        };
        const preExplanation = () => {
            if (explanationCount.value < 9 && explanationCount.value > 0)
            explanationCount.value -=1
        };
        const nextExplanation = () => {
            if (explanationCount.value < 8 && explanationCount.value >= 0)
            explanationCount.value +=1
        };
        return{
            screenX,screenY,images,dollars,arrows,
            adddrag,adddragD,adddragA,rotate,leaveRotate,upRotate,
            explanation,explanationCount,changeExplanation,preExplanation,nextExplanation,
            square,triangle,circle,rectangle,dollarP,dollarM,arrow,
        };
    }
})
</script>
<style>
.draggable {
  padding: 5px;
}
.draggable:hover {
    background-color: teal;
}

</style>