export interface State {
    students: Record<string, MenteeData>;
}

export interface MenteeData {
	email?: string,
	firstName?: string,
	lastName?: string,
	status?: Status
}

export type Status = 'Invited' | 'NotInvited';
