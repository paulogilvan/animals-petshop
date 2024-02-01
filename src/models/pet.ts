type PetType = 'dog' | 'cat' | 'fish';
type PetSex = 'Macho' | 'Fêmea' | 'Diversos';
type Pet = {
    type: PetType,
    image: string,
    name: string,
    color: string,
    sex: PetSex 
}

const data: Pet[] = [
    {
        type: 'dog',
        image: 'pastor-alemao.jpg',
        name: 'Pastor Alemão',
        color: 'Amarelo e Preto',
        sex: 'Macho'
    },
    {
        type: 'dog',
        image: 'airedale-terrier.jpg',
        name: 'Airedale Terrier',
        color: 'Marrom',
        sex: 'Macho'
    },
    {
        type: 'dog',
        image: 'american-staffordshire-terrier.jpg',
        name: 'American Staffordshire Terrier',
        color: 'Branco e Amarelo',
        sex: 'Fêmea'
    },
    {
        type: 'dog',
        image: 'basset-hound.jpg',
        name: 'Basset Hound',
        color: 'Marrom',
        sex: 'Fêmea'
    },
    {
        type: 'dog',
        image: 'bearded-collie.jpg',
        name: 'Bearded Collie',
        color: 'Branco e Preto',
        sex: 'Macho'
    },
    {
        type: 'dog',
        image: 'rottweiler.jpg',
        name: 'Rottweiler',
        color: 'Preto',
        sex: 'Macho'
    },
    {
        type: 'dog',
        image: 'akita.jpg',
        name: 'Akita',
        color: 'Branco',
        sex: 'Fêmea'
    },
    {
        type: 'cat',
        image: 'persa.jpg',
        name: 'Persa',
        color: 'Amarelo',
        sex: 'Macho'
    },
    {
        type: 'cat',
        image: 'mainecoon.jpg',
        name: 'Maine Coon',
        color: 'Cinza',
        sex: 'Fêmea'
    },
    {
        type: 'cat',
        image: 'angora.jpg',
        name: 'Angora',
        color: 'Branco',
        sex: 'Fêmea'
    },
    {
        type: 'cat',
        image: 'siames.jpg',
        name: 'Siamês',
        color: 'Branco e Marrom',
        sex: 'Macho'
    },
    {
        type: 'cat',
        image: 'ragdoll.jpg',
        name: 'Ragdoll',
        color: 'Branco',
        sex: 'Macho'
    },
    {
        type: 'fish',
        image: 'neon.jpg',
        name: 'Tetra Neon',
        color: 'Rosa e Azul',
        sex: 'Diversos'
    },
    {
        type: 'fish',
        image: 'badejo.jpg',
        name: 'Badejo',
        color: 'Cinza',
        sex: 'Diversos'
    },
    {
        type: 'fish',
        image: 'disco.jpg',
        name: 'Disco',
        color: 'Amarelo',
        sex: 'Diversos'
    },
    {
        type: 'fish',
        image: 'slames.jpg',
        name: 'Slamês',
        color: 'Vermelho',
        sex: 'Diversos'
    },
    {
        type: 'fish',
        image: 'arraia.jpg',
        name: 'Arraia',
        color: 'Azul',
        sex: 'Diversos'
    },
]

export const Pet = {
    getAll: (): Pet[] => {
        return data;
    },
    getFromType: (type: PetType): Pet[] => {
        return data.filter(pet => pet.type === type);
    },
    getFromName: (name: string): Pet[] => {
        return data.filter(pet => pet.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
    }
};