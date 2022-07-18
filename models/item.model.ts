export interface Item {
    id: string;
    name: string;
    description?: string;
    quantity: number;
    createdAt: Date;
    deletedAt?: Date;
}
export function generateFakeData(): Item {
    return {
        id: "some-id",
        quantity: Math.random(),
        name: "some-name",
        description: "some-description",
        createdAt: new Date(),
    };
}
