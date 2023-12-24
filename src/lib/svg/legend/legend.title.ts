/*
 * $project.fileName
 * https://github.com/alisaitteke/seatmap-canvas Copyright 2023 Ali Sait TEKE
 */


import {dom} from "../../decorators";
import SvgBase from "./../svg.base";
import LegendItem from "./legend.item";

@dom({
    tag: "text",
    class: "legend-title",
    autoGenerate: false
})
export default class LegendTitle extends SvgBase {

    constructor(public parent: LegendItem) {
        super(parent);
        this.attr("x", this.global.config.style.legend.radius * 1.5);
        this.attr("fill", this.global.config.style.legend.font_color);
        this.attr("font-size", this.global.config.style.legend.font_size);
    }

    update() {

    }
}