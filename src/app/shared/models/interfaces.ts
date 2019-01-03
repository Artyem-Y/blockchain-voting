export interface Deserializable {
    deserialize(input: any): this;
}

export interface clone {
    clone(): this;
}