export interface App {
	name: string;
}

export interface App2 extends App {
	type?: string;
}

export interface App3 {
	apply(): void;
}

export class MobileApp implements App2, App3 {
	apply(): void {
		throw new Error('Method not implemented.');
	}

	type?: string | undefined;
	name: string = 'Deneme';
}

export interface ErrorHandling {
	success: boolean;
	error?: { message: string };
}

interface ArtworksData {
	artworks: { title: string }[];
}

interface ArtistsData {
	artists: { name: string }[];
}

// İntersect birden fazla tipin birleşimi demek
type ArtworksResponse = ArtworksData & ErrorHandling;
const aw: ArtworksResponse = {
	success: false,
	artworks: [{ title: '1' }, { title: '2' }],
};

type ArtistsResponse = ArtistsData & ErrorHandling;

class Person<TId> {
	id!: TId; // aşağıdakinin aynısı
	id2: TId | undefined;

	private age: number = 0;

	set Age(value: number) {
		this.age = value;
	}

	get Age(): number {
		return this.age;
	}
}

const p = new Person();
p.Age = 15;
console.log('Age' + p.Age);
// p.setAge(15);
