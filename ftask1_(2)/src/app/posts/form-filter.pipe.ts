import { Pipe, PipeTransform } from "@angular/core";
import { Post } from "../posts/data.service";

@Pipe({
    name: 'usersFilter'
})
export class FormFilterPipe implements PipeTransform{
    transform(users: Post[], searchTerm: string): Post[] {
        if (!users || !searchTerm) {
            return users;
        }
        return users.filter(user => user.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
    }
}