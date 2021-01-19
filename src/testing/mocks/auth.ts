import { User } from '@modules/auth/models';
export { User };

export class MockUser implements User {
    id: number = 1;
    name: string = 'demo';
    userId: string = 'demo';    
}
