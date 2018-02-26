import React, { Component } from 'react';
import classNames from 'classnames';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { fromJS } from 'immutable';
import { Draggable } from 'react-beautiful-dnd';

import css from './Item.css';

export default class Item extends Component {
    static propTypes = {
        item: ImmutablePropTypes.map.isRequired,
    }

    /**
     * fromJS - Deeply converts plain JS objects and arrays to Immutable Maps and Lists. 
     */
    static defaultProps = {
        item: fromJS({}),
    }

    render() {
        const { item } = this.props;
        console.log('items', item)
        return (
            <Draggable draggableId={item.get('id')}>
                {
                    (provided, snapshot) => {
                        return (
                            <div>
                                <div
                                    className={classNames(css.item, {
                                        [css.dragging]: snapshot.isDragging,
                                    })}
                                    style={provided.draggableStyle}
                                    ref={provided.innerRef}
                                    {...provided.dragHandleProps}
                                >
                                    <div
                                        className={css.user}
                                    >
                                        <div className={css.avatar} />
                                        <div className={css.info}>
                                            <b>{item.get('name')}</b>
                                            <div className={css.title}>
                                                {item.get('title')}
                                            </div>
                                        </div>
                                        <div className={css.actions}>
                                            <i className="fa fa-fw fa-bell" />
                                        </div>
                                    </div>
                                    <div className={css.meta}>
                                        <div className={css.stats}>
                                            <div className={css.grade}>
                                                {item.get('grade')}
                                            </div>
                                            <div>
                                                <i className="fa fa-fw fa-thumbs-up" />
                                                {item.get('like')}
                                            </div>
                                            <div>
                                                <i className="fa fa-fw fa-comment" />
                                                {item.get('comments')}
                                            </div>
                                            <div>
                                                <i className="fa fa-fw fa-envelope" />
                                                {item.get('messages')}
                                            </div>
                                        </div>
                                        <div>
                                            {item.get('createdAt')}
                                        </div>
                                    </div>
                                </div>
                                {provided.placeholder}
                            </div>
                        )
                    }
                }
            </Draggable>
        )
    }
}
