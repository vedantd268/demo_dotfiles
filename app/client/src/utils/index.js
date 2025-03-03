import {surpriseMePrompts} from '../constants';
import FileSaver from "file-saver";

export function getrandomprompt(prompt){
    const randomindex = Math.floor(Math.random()*surpriseMePrompts.length);
    const randomprompt = surpriseMePrompts[randomindex];
    if(randomprompt===prompt) return getrandomprompt(prompt);
    return randomprompt;
}

export async function downloadImg(_id,photo){
    FileSaver.saveAs(photo,`download-${_id}.png`);
}