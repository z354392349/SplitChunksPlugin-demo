import classC from './classes/class-c';

let engligh = {
    teacher: 'english', age: 47
};


import(/* webpackChunkName: "async-class-a" */ './classes/class-a').then(classA =>{
    classA.push(engligh);
});
import(/* webpackChunkName: "async-class-" */ './classes/class-b').then(classB =>{
    classB.push(engligh);
});
classC.push(engligh);
