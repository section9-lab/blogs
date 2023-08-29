import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as d,c as t,a as e,e as r,w as o,b as n,f as c}from"./app-e63c6dbd.js";const u={},v=e("h1",{id:"kafkaconf",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kafkaconf","aria-hidden":"true"},"#"),n(" KafkaConf")],-1),b={class:"table-of-contents"},m=c(`<hr><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class ReliableProducer {

   public static void main(String[] args) {

      // Kafka broker 地址
      String bootstrapServers = &quot;localhost:9092&quot;;

      // 设置 Producer 的配置信息
      Properties props = new Properties();
      props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);

      // 设置消息可靠性配置参数
      props.put(ProducerConfig.ACKS_CONFIG, &quot;all&quot;); // 0不会等待任何broker的响应;1得到leader的确认;all等待所有副本写入确认
      props.put(ProducerConfig.RETRIES_CONFIG, 3); // 自动重试 3 次
      props.put(ProducerConfig.MAX_IN_FLIGHT_REQUESTS_PER_CONNECTION, 1);//该参数指定了生产者在收到服务器晌应之前可以发送多少个消息。
      // 开启幂等性,由于消息是分batch(批次)发送的，每个batch(批次)都有一个序列号。
      //在Broker端，会追踪每个分区的最大序列号。如果出现序列号较小或相等的batch(批次)，broker将不会将该batch(批次)写入topic。
      //这样，除了保证了幂等性，还可以确保batch(批次)的顺序。
      props.put(ProducerConfig.ENABLE_IDEMPOTENCE_CONFIG, true);

      props.put(ProducerConfig.COMPRESSION_TYPE_CONFIG, &quot;snappy&quot;);
      // 设置消息序列化：使用 StringSerializer 将键和值序列化为字节数组
      props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
      props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());

      // 创建一个 KafkaProducer 实例，并指定 key 和 value 的类型为 String
      KafkaProducer&lt;String, String&gt; producer = new KafkaProducer&lt;&gt;(props);

      // 创建一个消息
      String topic = &quot;test-topic&quot;;
      String key = &quot;key&quot;;
      String value = &quot;value&quot;;

      // 发送消息，并阻塞直到发送完成
      producer.send(new ProducerRecord&lt;&gt;(topic, key, value)).get();

      // 关闭 producer
      producer.close();

   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p={href:"https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying",target:"_blank",rel:"noopener noreferrer"};function f(g,_){const s=i("router-link"),a=i("ExternalLinkIcon");return d(),t("div",null,[v,e("nav",b,[e("ul",null,[e("li",null,[r(s,{to:"#config"},{default:o(()=>[n("config")]),_:1})])])]),m,e("ul",null,[e("li",null,[e("a",p,[n("https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying"),r(a)])])])])}const k=l(u,[["render",f],["__file","KafkaConf.html.vue"]]);export{k as default};
