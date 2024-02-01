export class Team {
    constructor() {
        this.members = new Set();
    }

    add(member) {
        if(this.members.has(member)) {
            throw new Error('Объект уже существует');
        } else {
            this.members.add(member);
        }
    }

    addAll(...squad) {
        squad.forEach((el) => {
            this.members.add(el)
        });
    }

    toArray() {
        return Array.from(this.members);
    }

    [Symbol.iterator]() {
       let index = 0;
       const members = this.toArray();
    
    return {
        next() {
            index++;
            if(index < members.length) {
                return { done: false, value: members[index]};
            } else {
                return {done: true};
            }
        },
    };
}
}

const team = new Team();
team.add('igrok');
team.add('winner');
team.addAll('micro', 'macro');
team.toArray();

for (const player of team) {
    console.log(player);
}
