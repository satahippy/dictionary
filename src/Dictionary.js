class Dictionary
{
    constructor(...dictionaries) {
        this.dictionary = Object.assign({},...dictionaries);
    }

    merge(dictionary) {
        Object.assign(this.dictionary, dictionary);
    }

    get(text) {
        return this.dictionary[text];
    }
}

export default Dictionary;