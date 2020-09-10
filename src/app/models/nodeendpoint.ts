import { environment } from 'src/environments/environment';

export const NodeUrl = {
    get: `${environment.node_url}/get`,
    post: `${environment.node_url}/post`,
    delete: `${environment.node_url}/delete`,
    update: `${environment.node_url}/update`,
    add: `${environment.node_url}/add`
};

