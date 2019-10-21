import { DataStore } from "./base/DataStore.js";

// 导演类，控制游戏的主流程，逻辑

export class Director{
    constructor(){
        // 获取变量池
        this.dataStore = DataStore.getInstance();
    }
    // 导演只能有一个
    static getInstance(){
        if(!Director.instance){
            Director.instance = new Director();
        }
        return Director.instance;
    }

    // 运行
    run(){
        // 画背景图
        this.dataStore.get('background').draw();
        // 画地板图
        this.dataStore.get('land').draw();

        // 循环运行
        requestAnimationFrame(()=>this.run());
        
    }
}
