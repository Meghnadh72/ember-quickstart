import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
    model(){
        let programmersName = ["Meghnadh", "Anuth", "Rajesh"];
        return programmersName;
    }
}
