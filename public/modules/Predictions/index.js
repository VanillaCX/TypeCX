class Predictions {
    constructor(sets){
        this.sets = sets;

    }

    addSet(set) {
        const exists = this.getSetByType()
    }

    getSetByType(type){
        return this.sets.find((set) => set.type === type); 
    }

    filterType(set, value){
        return Array.from(set).filter((suggestion) => suggestion.text.startsWith(value))
    }

    getSuggestions(type, value){
        const set = this.getSetByType(type);

        if(!set){
            return []
        }

        return this.filterType(set.suggestions, value);
    }
}

export {Predictions}