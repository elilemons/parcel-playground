import './navigation.scss';
import data from '../../data/navigation.data.json';

(function() {
  const navigation = data.navigation,
  max = navigation.length;
  
  let i = 0,
    navigationItems = document.getElementById('navigation__items');
  
  for (i; i < max; i++) {
    navigationItems.innerHTML += `<li class="nav-item"><a href="${navigation[i]}">${navigation[i]}</a></li>`;
  }
})();
