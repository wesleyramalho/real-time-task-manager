import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { fromJS } from 'immutable';
import { Droppable } from 'react-beautiful-dnd';

import Item from './Item';

import css from './List.less';

export default class List extends Component {
    static propTypes = {
        list: ImmutablePropTypes.map.isRequired,
    }

    static defaultProps = {
        list: fromJS({}),
    }

    render() {
        const { list } = this.props;

        return (
            <div className={css.list}>
                <Droppable droppableId={list.get('id')}>
                    {
                        (provided) => {
                            return (
                                <div className={css.column}>
                                    <div className={css.title}>
                                        {list.get('title')}
                                        <span className={css.count}>
                                            {list.get('items').size}
                                        </span>
                                    </div>
                                    <i className="fa fa-fw fa-caret-down"/>
                                </div>
                            )
                        }
                    }
                </Droppable>
            </div>
        )
    }



}