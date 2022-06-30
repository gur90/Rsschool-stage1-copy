import './sources.css';
import { Source} from '../../types/interfaces'
class Sources {
    draw(data: Source) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);

            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
           
        });

        document.querySelector('.sources').append(fragment);
    }
}

export default Sources;
