import './style.scss';

interface Item {
  title: string;
  img: string;
  artist: string;
}

interface QuickPickItemProps {
  item: Item;
}

export function QuickPickItem({ item }: QuickPickItemProps) {

  return (
    <div className='container-quick-pick-item'>
      <img src={item.img} alt={item.title} />
      <section>
        <h2>{item.title}</h2>
        <div className='links'>
          <a href="/#">{item.artist}</a>
          <a href="/#">{item.title}</a>
        </div>
      </section>
    </div>
  )
}