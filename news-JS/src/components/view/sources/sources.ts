import './sources.css';
import { Source} from '../../../types/interfaces'
class Sources {
    draw(data: Source): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            (<HTMLElement>sourceClone.querySelector('.source__item-name')).textContent = item.name;
            (<HTMLElement>sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        
        });
    
        (document.querySelector('.sources') as HTMLElement).append(fragment);
    }
}

export default Sources;
