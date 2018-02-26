import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { fromJS } from 'immutable';
import { Droppable } from 'react-beautiful-dnd';

import Item from './Item';

import css from './List.css';

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
                                    <i className="fa fa-fw fa-caret-down" />
                                    <div className={css.body}>
                                        <div
                                            className={css.wrapper}
                                            ref={provided.innerRef}
                                        >
                                            {
                                                list.get('items').map((item) => {
                                                    return (
                                                        <Item
                                                            key={item.get('id')}
                                                            item={item}
                                                        />
                                                    )
                                                })
                                            }
                                            {provided.placeholder}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                </Droppable>
            </div>
        )
    }
}