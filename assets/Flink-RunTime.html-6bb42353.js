const e=JSON.parse('{"key":"v-b576c714","path":"/flink/Flink-RunTime.html","title":"Flink-RunTime","lang":"zh-CN","frontmatter":{"icon":"fab fa-markdown","date":"2023-11-22T00:00:00.000Z","category":["Flink"],"tag":["java","flink"],"star":true,"sticky":true,"description":"Flink-RunTime 架构 这三个组件都包含在 AppMaster 进程中 Dispatcher: 负责接收用户提供的作业，并且负责为这个新提交的作业拉起一个新的 JobManager 服务。 ResourceManager: 负责资源的管理，在整个 Flink 集群中只有一个 ResourceManager，资源相关的内容都由这个服务负责。 JobManager: 负责管理具体某个作业的执行，在一个 Flink 集群中可能有多个作业同时执行，每个作业都会有自己的 JobManager 服务。","head":[["meta",{"property":"og:url","content":"https://section9-lab.github.io/blogs/blogs/flink/Flink-RunTime.html"}],["meta",{"property":"og:site_name","content":"博客站点"}],["meta",{"property":"og:title","content":"Flink-RunTime"}],["meta",{"property":"og:description","content":"Flink-RunTime 架构 这三个组件都包含在 AppMaster 进程中 Dispatcher: 负责接收用户提供的作业，并且负责为这个新提交的作业拉起一个新的 JobManager 服务。 ResourceManager: 负责资源的管理，在整个 Flink 集群中只有一个 ResourceManager，资源相关的内容都由这个服务负责。 JobManager: 负责管理具体某个作业的执行，在一个 Flink 集群中可能有多个作业同时执行，每个作业都会有自己的 JobManager 服务。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-24T06:15:27.000Z"}],["meta",{"property":"article:author","content":"Section9lab"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:tag","content":"flink"}],["meta",{"property":"article:published_time","content":"2023-11-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-24T06:15:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Flink-RunTime\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-22T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-24T06:15:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Section9lab\\",\\"url\\":\\"https://github.com/section9lab/\\"}]}"]]},"headers":[{"level":2,"title":"架构","slug":"架构","link":"#架构","children":[]},{"level":2,"title":"启动流程","slug":"启动流程","link":"#启动流程","children":[]},{"level":2,"title":"资源管理与作业调度","slug":"资源管理与作业调度","link":"#资源管理与作业调度","children":[]},{"level":2,"title":"错误处理","slug":"错误处理","link":"#错误处理","children":[]}],"git":{"createdTime":1700623291000,"updatedTime":1700806527000,"contributors":[{"name":"Tachikoma","email":"section9lab@gmail.com","commits":5}]},"readingTime":{"minutes":11.45,"words":3436},"filePathRelative":"flink/Flink-RunTime.md","localizedDate":"2023年11月22日","excerpt":"<h1> Flink-RunTime</h1>\\n\\n<hr>\\n<h2> 架构</h2>\\n<p><img src=\\"https://ci.apache.org/projects/flink/flink-docs-release-1.10/fig/processes.svg\\" alt=\\"Flin-RunTime\\" loading=\\"lazy\\"><br>\\n这三个组件都包含在 AppMaster 进程中</p>\\n<ul>\\n<li>Dispatcher: 负责接收用户提供的作业，并且负责为这个新提交的作业拉起一个新的 JobManager 服务。</li>\\n<li>ResourceManager: 负责资源的管理，在整个 Flink 集群中只有一个 ResourceManager，资源相关的内容都由这个服务负责。</li>\\n<li>JobManager: 负责管理具体某个作业的执行，在一个 Flink 集群中可能有多个作业同时执行，每个作业都会有自己的 JobManager 服务。</li>\\n</ul>","autoDesc":true}');export{e as data};