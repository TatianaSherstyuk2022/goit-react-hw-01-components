import PropTypes from 'prop-types';
import css from './FriendList.module.css'

export function FriendListItem({avatar, name, isOnline}) {
  return (
    <li className={css.friends__item}>
          <span className={`${css.friends__status} ${css[isOnline]}`}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={css.friends__name}>{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};