export interface Atributo{
    displayName: string;
    description: string;
    displayIcon: string;
}

export interface Agente {
    displayName:string;
    description: string;
    displayIcon: string;
    fullPortrait: string;
    role: Atributo;
    uuid: string;
    developerName: string;
    isPlayableCharacter:boolean;
}

