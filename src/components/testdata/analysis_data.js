export const treeData = [
  {
    title: "Приобское",
    key: "0-0",
    children: [
      {
        title: "192",
        key: "0-0-0",
        children: [
          {
            title: "9500",
            key: "0-0-0-0",
            children: [{ title: "1", key: "0-0-0-0-0" }],
          },
          {
            title: "9501",
            key: "0-0-0-1",
            children: [{ title: "1", key: "0-0-0-1-0" }],
          },
          {
            title: "9502",
            key: "0-0-0-2",
            children: [{ title: "1", key: "0-0-0-2-0" }],
          },
        ],
      },
      {
        title: "193",
        key: "0-0-1",
      },
      {
        title: "194",
        key: "0-0-2",
      },
    ],
  },
  {
    title: "Суторминское",
    key: "0-1",
  },
  {
    title: "Самотлорское",
    key: "0-2",
  },
  {
    title: "Ромашкинское",
    key: "0-3",
  },
  {
    title: "Повховское",
    key: "0-4",
  },
];

export const treeOperations = [
  {
    key: "1",
    title: "Бурение",
    children: [
      { key: "1-1", title: "Бурение" },
      { key: "1-2", title: "Отбор керна" },
      { key: "1-3", title: "КНБК" },
    ],
  },
  { key: "2", title: "СПО" },
  { key: "3", title: "Наращивание" },
  { key: "4", title: "Расширение" },
  {
    key: "5",
    title: "Крепление",
    children: [
      { key: "5-1", title: "ПЗР" },
      { key: "5-2", title: "Промывка" },
      { key: "5-3", title: "Спуск колонны" },
      { key: "5-4", title: "Цементирование" },
      { key: "5-5", title: "Активация оснастки" },
      { key: "5-6", title: "ОЗЦ" },
      { key: "5-7", title: "Оборудование устья" },
      { key: "5-8", title: "Прочие работы" },
    ],
  },
  {
    key: "6",
    title: "Вспом. работы",
    children: [
      { key: "6-1", title: "ПЗР" },
      { key: "6-2", title: "Обработка раствора" },
      { key: "6-3", title: "Проработка" },
      { key: "6-4", title: "Снятие замеров" },
      { key: "6-5", title: "Промывка" },
      { key: "6-6", title: "Прокачка пачки" },
      { key: "6-7", title: "Тест на приток" },
      { key: "6-8", title: "Монтаж ПВО" },
      { key: "6-9", title: "Демонтаж ПВО" },
      { key: "6-10", title: "Монтаж ФА" },
      { key: "6-11", title: "Демонтаж ФА" },
      { key: "6-12", title: "Фрезерование окна" },
      { key: "6-13", title: "Разбуривание НЦС" },
      { key: "6-14", title: "Разбуривание оснастки" },
      { key: "6-15", title: "Разбуривание ЦК" },
      { key: "6-16", title: "Опрессовка" },
      { key: "6-17", title: "ГИС(на кабеле)" },
      { key: "6-18", title: "ГИС(на трубах)" },
      { key: "6-19", title: "Ориентирование КО" },
      { key: "6-20", title: "УТЗ" },
      { key: "6-21", title: "Чистка ЦСГО/ЕБ" },
      { key: "6-22", title: "Прочие работы" },
    ],
  },
  {
    key: "7",
    title: "Ремонт",
    children: [
      {
        key: "7-1",
        title: "ОГМ",
        children: [
          { key: "7-1-1", title: "БЛ" },
          { key: "7-1-2", title: "БН" },
          { key: "7-1-3", title: "ВСП" },
          { key: "7-1-4", title: "Бур. рукав" },
          { key: "7-1-5", title: "Гидравлика" },
          { key: "7-1-6", title: "ДЭС" },
          { key: "7-1-7", title: "Бур. ключ" },
          { key: "7-1-8", title: "ПВО" },
          { key: "7-1-9", title: "Перетяжка Т/К" },
          { key: "7-1-10", title: "Сист. очистки" },
        ],
      },

      {
        key: "7-2",
        title: "ОГТ",
        children: [
          { key: "7-2-1", title: "Бур. инстр." },
          { key: "7-2-2", title: "КНБК" },
          { key: "7-2-3", title: "Хвостовик" },
          { key: "7-2-4", title: "Цементаж" },
          { key: "7-2-5", title: "СПО" },
          { key: "7-2-6", title: "Прихват" },
        ],
      },

      {
        key: "7-3",
        title: "ОГЭ",
        children: [
          { key: "7-1-1", title: "ВСП" },
          { key: "7-1-2", title: "ДЭС" },
          { key: "7-1-3", title: "КИП" },
          { key: "7-1-4", title: "Котельная" },
          { key: "7-1-5", title: "Оборудование 6кВ" },
          { key: "7-1-6", title: "Кабель" },
          { key: "7-1-7", title: "Коммутация" },
          { key: "7-1-8", title: "Частотник" },
          { key: "7-1-9", title: "Электродвигатель" },
        ],
      },

      {
        key: "7-4",
        title: "ББ",
        children: [
          { key: "7-1-1", title: "ВСП" },
          { key: "7-1-2", title: "БН" },
          { key: "7-1-3", title: "БЛ" },
          { key: "7-1-4", title: "Бур. ключ" },
          { key: "7-1-5", title: "ЦСГО" },
          { key: "7-1-6", title: "ДЭС" },
          { key: "7-1-7", title: "ЕНВ" },
        ],
      },

      { key: "7-5", title: "МТО" },
      { key: "7-6", title: "ЦИТС" },
    ],
  },
  {
    key: "8",
    title: "НСАД",
    children: [
      {
        key: "8-1",
        title: "ОГМ",
        children: [
          { key: "8-1-1", title: "БЛ" },
          { key: "8-1-2", title: "БН" },
          { key: "8-1-3", title: "ВСП" },
          { key: "8-1-4", title: "Бур. рукав" },
          { key: "8-1-5", title: "Гидравлика" },
          { key: "8-1-6", title: "ДЭС" },
          { key: "8-1-7", title: "Бур. ключ" },
          { key: "8-1-8", title: "ПВО" },
          { key: "8-1-9", title: "Перетяжка Т/К" },
          { key: "8-1-10", title: "Сист. очистки" },
        ],
      },

      {
        key: "8-2",
        title: "ОГТ",
        children: [
          { key: "8-2-1", title: "Бур. инстр." },
          { key: "8-2-2", title: "КНБК" },
          { key: "8-2-3", title: "Хвостовик" },
          { key: "8-2-4", title: "Цементаж" },
          { key: "8-2-5", title: "СПО" },
          { key: "8-2-6", title: "Прихват" },
        ],
      },

      {
        key: "8-3",
        title: "ОГЭ",
        children: [
          { key: "8-1-1", title: "ВСП" },
          { key: "8-1-2", title: "ДЭС" },
          { key: "8-1-3", title: "КИП" },
          { key: "8-1-4", title: "Котельная" },
          { key: "8-1-5", title: "Оборудование 6кВ" },
          { key: "8-1-6", title: "Кабель" },
          { key: "8-1-7", title: "Коммутация" },
          { key: "8-1-8", title: "Частотник" },
          { key: "8-1-9", title: "Электродвигатель" },
        ],
      },

      {
        key: "8-4",
        title: "ББ",
        children: [
          { key: "8-1-1", title: "ВСП" },
          { key: "8-1-2", title: "БН" },
          { key: "8-1-3", title: "БЛ" },
          { key: "8-1-4", title: "Бур. ключ" },
          { key: "8-1-5", title: "ЦСГО" },
          { key: "8-1-6", title: "ДЭС" },
          { key: "8-1-7", title: "ЕНВ" },
        ],
      },

      { key: "8-5", title: "МТО" },
      { key: "8-6", title: "ЦИТС" },
    ],
  },

  {
    key: "9",
    title: "Заказчик",
    children: [
      { key: "9-1", title: "Заказчик" },
      {
        key: "9-2",
        title: "Подрядчик",
        children: [
          { key: "9-2-1", title: "ННБ" },
          { key: "9-2-2", title: "БР" },
          { key: "9-2-3", title: "Долота" },
          { key: "9-2-4", title: "Пакер" },
          { key: "9-2-5", title: "Цементаж" },
          { key: "9-2-6", title: "ГИС" },
          { key: "9-2-7", title: "КЛИН" },
        ],
      },
    ],
  },
  {
    key: "10",
    title: "Подрядчик",
    children: [
      { key: "10-1", title: "ННБ" },
      { key: "10-2", title: "БР" },
      { key: "10-3", title: "Долота" },
      { key: "10-4", title: "Пакер" },
      { key: "10-5", title: "Цементаж" },
      { key: "10-6", title: "ГИС" },
      { key: "10-7", title: "КЛИН" },
    ],
  },
  { key: "11", title: "Осложнение" },
  {
    key: "12",
    title: "Прочее",
    children: [
      { key: "12-1", title: "Брак" },
      { key: "12-1", title: "Авария" },
      { key: "12-1", title: "Метео" },
      { key: "12-1", title: "Прочее" },
    ],
  },
];
