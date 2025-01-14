import { sortByHealth } from '../health';
test('sort by descending health', () => {
    let array = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ];
      let output = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ];
expect(sortByHealth(array)).toEqual(output);
})