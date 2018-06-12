import {addParagraph} from './helpers';
import SuperPerson from './person';

const john = new SuperPerson('John', 'X-Ray Vision');

addParagraph(john.talk('Hello'));

addParagraph(john.saySuperpower('Invisibility'))