import { Group } from '../../components/group';
import { Header } from '../../components/header';
import { QuickPickGroup } from '../../components/quick-pick-group';

import './style.scss';

export function Home() {
  return (
    <div className='container-home'>
      <Header />
      <section className='content'>
        <p>INICIAR RÁDIO COM UMA MÚSICA</p>

        <QuickPickGroup />

        <Group title='Top vídeos de música'>

        </Group>
      </section>
    </div>
  )
}