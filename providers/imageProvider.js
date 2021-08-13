const fetch = require('node-fetch');

const imageProvider = class {

    _fileType;
    _category;
    _tag;
    _nsfw;
    _bytes;

    constructor(fileType, category, tag, nsfw) {
        this._fileType = fileType;
        this._category = category;
        this._tag = tag;
        this._nsfw = nsfw;
    }

    async fetchByteArray() {
        const response = fetch('http://localhost:25565/api/?filetype=' + this._fileType + "&category=" + this._category + "&tags=" + this._tag + "&nsfw=" + this._nsfw);
        await response.then(response => response.json()).then(json => this._bytes = new Uint8Array(json.image.data));
        return this._bytes;
    };
};

module.exports = imageProvider;
