import { Group } from '../group'

import QuickPicks from '../../assets/mock-data/quick-picks.json';

import './style.scss';
import { QuickPickItem } from './quick-pick-item';

export function QuickPickGroup() {

  return (
    <Group title='Escolhas rápidas'>
      <ul>
        {
          QuickPicks.map((item) => (
            <QuickPickItem item={item} />
          ))
        }
      </ul>
    </Group>
  )
}