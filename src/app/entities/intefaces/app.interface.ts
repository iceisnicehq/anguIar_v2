/**
 *  Интрефейс фитнес-зала, универсальный интерфейс
 *
 * @param { string } name - имя атлета
 * @param { string } lift - вид упражнения
 * @param { Date } date - дата выполнения
 * @param { string } eqt - экипировка атлета
 * @param { string } natural - натурален ли атлет(использование стероидов)
 * @param { string } weight - вес снаряда
 */

export interface IGym {
    name: string,
    lift: string,
    date: Date,
    eqt: string,
    natural: boolean,
    weight: string,
}
