export interface Employee {
    id: string;
    employeeId: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    department: string;
    designation: string;
    dateOfJoining: {
        $date: string;
    };
    salary: number;
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
    skills: string[];
    isActive: boolean;
}