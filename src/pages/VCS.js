import React, { Component } from 'react'
import {render} from 'react-dom'

export default class VCS extends Component {
    render() {
        return(
            <div>
                <h2>VCS</h2>
                <p>Система управления версиями (от англ. Version Control System, VCS или Revision Control System) 
                    — программное обеспечение для облегчения работы с изменяющейся информацией. 
                    Система управления версиями позволяет хранить несколько версий одного и того же документа, 
                    при необходимости возвращаться к более ранним версиям, определять, кто и когда сделал то 
                    или иное изменение, и многое другое.</p>
                <p>Такие системы наиболее широко используются при разработке программного обеспечения 
                    для хранения исходных кодов разрабатываемой программы. Однако они могут с успехом 
                    применяться и в других областях, в которых ведётся работа с большим количеством непрерывно
                    изменяющихся электронных документов. В частности, системы управления версиями применяются 
                    в САПР, обычно в составе систем управления данными об изделии (PDM).
                    Управление версиями используется в инструментах конфигурационного управления 
                    (Software Configuration Management Tools).</p>
                <h2>Общие сведения</h2>
                <p>Ситуация, в которой электронный документ за время своего существования претерпевает 
                ряд изменений, достаточно типична. При этом часто бывает важно иметь не только последнюю 
                версию, но и несколько предыдущих. В простейшем случае можно просто хранить несколько 
                вариантов документа, нумеруя их соответствующим образом. Такой способ неэффективен 
                (приходится хранить несколько практически идентичных копий), требует повышенного внимания 
                и дисциплины и часто ведёт к ошибкам, поэтому были разработаны средства для автоматизации 
                этой работы.</p>
                <p>Традиционные системы управления версиями используют централизованную модель, 
                когда имеется единое хранилище документов, управляемое специальным сервером, 
                который и выполняет бо́льшую часть функций по управлению версиями. Пользователь, 
                работающий с документами, должен сначала получить нужную ему версию документа из 
                хранилища; обычно создаётся локальная копия документа, так называемая «рабочая копия». 
                Может быть получена последняя версия или любая из предыдущих, которая может быть выбрана 
                по номеру версии или дате создания, иногда и по другим признакам. После того, как в 
                документ внесены нужные изменения, новая версия помещается в хранилище. В отличие от 
                простого сохранения файла, предыдущая версия не стирается, а тоже остаётся в хранилище 
                и может быть оттуда получена в любое время. Сервер может использовать т. н. 
                дельта-компрессию — такой способ хранения документов, при котором сохраняются только 
                изменения между последовательными версиями, что позволяет уменьшить объём хранимых данных. 
                Поскольку обычно наиболее востребованной является последняя версия файла, система может 
                при сохранении новой версии сохранять её целиком, заменяя в хранилище последнюю ранее 
                сохранённую версию на разницу между этой и последней версией. Некоторые системы 
                (например, ClearCase) поддерживают сохранение версий обоих видов: большинство версий 
                сохраняется в виде дельт, но периодически (по специальной команде администратора) 
                выполняется сохранение версий всех файлов в полном виде; такой подход обеспечивает 
                максимально полное восстановление истории в случае повреждения репозитория.</p>
                <p>Иногда создание новой версии выполняется незаметно для пользователя (прозрачно), 
                либо прикладной программой, имеющей встроенную поддержку такой функции, либо за счёт
                использования специальной файловой системы. В этом случае пользователь просто работает 
                с файлом, как обычно, и при сохранении файла автоматически создаётся новая версия.</p>
                <p>Часто бывает, что над одним проектом одновременно работают несколько человек. 
                Если два человека изменяют один и тот же файл, то один из них может случайно 
                отменить изменения, сделанные другим. Системы управления версиями отслеживают 
                такие конфликты и предлагают средства их решения. Большинство систем может автоматически 
                объединить (слить) изменения, сделанные разными разработчиками. Однако такое 
                автоматическое объединение изменений, обычно, возможно только для текстовых файлов и
                при условии, что изменялись разные (непересекающиеся) части этого файла. 
                Такое ограничение связано с тем, что большинство систем управления версиями ориентированы
                на поддержку процесса разработки программного обеспечения, а исходные коды программ 
                хранятся в текстовых файлах. Если автоматическое объединение выполнить не удалось, 
                система может предложить решить проблему вручную.</p>
                <p>Часто выполнить слияние невозможно ни в автоматическом, ни в ручном режиме, например, 
                если формат файла неизвестен или слишком сложен. Некоторые системы управления версиями 
                дают возможность заблокировать файл в хранилище. Блокировка не позволяет другим 
                пользователям получить рабочую копию или препятствует изменению рабочей копии файла 
                (например, средствами файловой системы) и обеспечивает, таким образом, исключительный 
                доступ только тому пользователю, который работает с документом.</p>
                <p>Многие системы управления версиями предоставляют ряд других возможностей:</p>
                <ul>
                    <li>Позволяют создавать разные варианты одного документа, т. н. ветки, с общей 
                    историей изменений до точки ветвления и с разными — после неё.</li>
                    <li>Дают возможность узнать, кто и когда добавил или изменил конкретный набор строк в 
                    файле</li>  
                    <li>Ведут журнал изменений, в который пользователи могут записывать пояснения о том, 
                    что и почему они изменили в данной версии.</li>
                    <li>Контролируют права доступа пользователей, разрешая или запрещая чтение или изменение 
                    данных, в зависимости от того, кто запрашивает это действие.</li>
                </ul>
            </div>
        )
    }
}

render(<VCS/>, document.getElementById('article'))