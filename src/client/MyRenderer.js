'use strict';

//import Renderer from 'lance/render/Renderer';
//const AFrameRenderer = require('lance-gg').render.AFrameRenderer;
import Renderer from 'lance/render/AFrameRenderer';
import 'aframe';//this will add files to bundle.js
import 'aframe-physics-system';//this will add files to bundle.js

export default class MyRenderer extends Renderer {

    constructor(gameEngine, clientEngine) {
        super(gameEngine, clientEngine);
        //this.sprites = {};
    }

    draw() {
        super.draw();

    }

    toggle_login(){
        console.log("login...");
    }

    addObject(objData, options) {
        super.addObject(objData);

    }

    /*
    draw(t, dt) {
        super.draw(t, dt);
        for (let objId of Object.keys(this.sprites)) {
            if (this.sprites[objId].el) {
                this.sprites[objId].el.style.top = this.gameEngine.world.objects[objId].position.y + 'px';
                this.sprites[objId].el.style.left = this.gameEngine.world.objects[objId].position.x + 'px';
            }
        }
    }
    

    addSprite(obj, objName) {
        if (objName === 'paddle') objName += obj.playerId;
        this.sprites[obj.id] = {
            el: document.querySelector('.' + objName)
        };
    }
    */

}
