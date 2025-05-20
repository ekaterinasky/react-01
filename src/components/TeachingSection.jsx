import WayToTeach from "./WayToTeach"
import { ways } from '../data'

export default function TeachingSection() {
    return(
        <section>
                  <h3>Мой подход к обучению</h3>
                  <ul>
                    {ways.map(item => <WayToTeach key={item.description} {...item} /> )}
                  </ul>
                </section>
    )
}