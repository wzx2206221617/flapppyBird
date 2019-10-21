import { ResourceLoader } from "./js/base/ResourceLoader.js";
import { DataStore } from "./js/base/DataStore.js";
import { Background } from "./js/runtime/Background.js";
import { Land } from "./js/runtime/Land.js";
import { Director } from "./js/Director.js";

// 程序的主类，用于小游戏过程中数据的初始化，以及点击事件的绑定

export class Main{
    constructor(){
        console.log('游戏开始了');
        // 初始化画布
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');
        // 初始化变量池
        this.loader = new ResourceLoader();
        // 初始化资源加载器
        this.dataStore = DataStore.getInstance();
        // 初始化一个导演
        this.director = Director.getInstance();
        // 加载完成后，执行其他的操作
        this.loader.onloaded(map => this.onResourceLoaded(map));
    }
    // 资源加载完成后执行其他操作的方法
    onResourceLoaded(map){
        // console.log(map);
        // 模拟画背景图
        // let bg = map.get('background'); // 拿背景资源
        // this.ctx.drawImage(bg,0,0,bg.width,bg.height,0,0,this.canvas.width,this.canvas.height);
        // 保存各种资源
        // 不使用set方法保存的原因：set方法保存的数据在游戏中结束时会被销毁
        // 而下面的数据及时游戏结束，也不会销毁，下一局可以继续使用
        this.dataStore.canvas = this.canvas;
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;

        this.init();
        
    }
    //游戏初始化,初始化游戏中的数据，将其保存在变量池中
    init(){
        // 模拟画背景图
        // new Background().draw()
        // new Land().draw()
        this.dataStore.set('background',new Background())
                      .set('land',new Land());

        // 开始运行
        this.director.run();
    }
}